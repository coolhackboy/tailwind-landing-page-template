import axios from 'axios'

export async function GET(request: Request) {
    // 获取请求参数
    const params = new URL(request.url).searchParams
    const searchTerm = params.get('q')
    const country = params.get('country')

    const response = await axios.get('https://api.aizone.cc/search', {
        params: {
            q: searchTerm,
            lang: country
        }
    })

    return new Response(JSON.stringify(response.data))
}
