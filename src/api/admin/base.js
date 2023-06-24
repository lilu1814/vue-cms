import HttpRequest from '@/utils/request'

// 上传头像
export function uploadAvatar (params = {}) {
  return HttpRequest('/upload', 'post', params)
}

// 上传视频
export function uploadVideo (params = {}) {
  return HttpRequest('/upload', 'post', params)
}
