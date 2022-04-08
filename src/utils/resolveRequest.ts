import { AxiosResponse, AxiosError, AxiosPromise } from 'axios'

const parseResult = (response: AxiosResponse) => (response?.data ? response.data : response)

type RequestResult<ReturnType> = {
    data: ReturnType | null
    error: AxiosError | {} | null
}

const resolveRequest = async <ReturnType>(
    requestPromise: AxiosPromise,
): Promise<RequestResult<ReturnType>> => {
    const result: RequestResult<ReturnType> = { data: null, error: null }

    try {
        const response: AxiosResponse = await requestPromise
        result.data = parseResult(response)
    } catch (error) {
        result.error = error as AxiosError
    }

    return result
}

export type { RequestResult }
export default resolveRequest
