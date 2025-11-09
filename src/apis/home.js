import httpInstance from '@/utils/http'

// banner
export function getBannerAPI () {
    return httpInstance({
        url: '/home/banner',
    })
}