package com.example.androidkotlincompose.modules.home.posts.presentations

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.androidkotlincompose.core.models.Resource
import com.example.androidkotlincompose.modules.home.posts.domain.models.Post
import com.example.androidkotlincompose.modules.home.posts.domain.usecase.PostsUseCase
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

data class PostsUIState(
    val posts: List<Post> = emptyList(),
    val error: String? = null,
    val isLoading: Boolean = false,
    val isEmpty: Boolean = true,
)

class PostsViewModel(
    private val postsUseCase: PostsUseCase
): ViewModel() {
    private val _postsUIState = MutableStateFlow(PostsUIState())
    val postsUIState: StateFlow<PostsUIState> = _postsUIState.asStateFlow()

    init {
        getComments()
    }

    private fun getComments(){

        _postsUIState.value = _postsUIState.value.copy(
            isLoading = true,
            posts = emptyList(),
            isEmpty = true,
        )

        viewModelScope.launch {
            val result = postsUseCase.getPosts()

            when(result){
                is Resource.Empty -> {
                    _postsUIState.update {
                        it.copy(
                            posts = emptyList(),
                            isLoading = false,
                            isEmpty = true
                        )
                    }
                }

                is Resource.Success -> {
                    _postsUIState.update {
                        it.copy(
                            posts = result.data!!,
                            isLoading = false,
                            isEmpty = false,
                        )
                    }
                }

                is Resource.Error -> {
                    _postsUIState.update {
                        it.copy(
                            isLoading = false,
                            error = result.message,
                            isEmpty = false
                        )
                    }
                }

                // Not needed, only use Resource Loading on Reactive Component
                // e.g flowable or livedata
                is Resource.Loading -> {

                }
            }
        }
    }
}