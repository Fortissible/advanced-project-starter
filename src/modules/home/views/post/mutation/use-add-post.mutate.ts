import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  PostRes,
  UploadPostReq,
} from 'libs/modules/post/models/upload-post.model';
import { dummyJsonApiService } from 'src/services/dummy-json/dummy-json-api.service';

export default function useAddPost() {
  const queryClient = useQueryClient();

  const {
    mutate: uploadPost,
    isPending: isUploading,
    isSuccess: isUploadSuccess,
    isError: isUploadError,
  } = useMutation<PostRes, Error, UploadPostReq>({
    mutationFn: (postData) => dummyJsonApiService.posts.uploadPost(postData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getPosts'] });
    },
  });

  return {
    uploadPost,
    isUploading,
    isUploadError,
    isUploadSuccess,
  };
}
