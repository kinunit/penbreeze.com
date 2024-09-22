import { defineStore } from "pinia";
import { Post } from "src/domain/post/Post";
import type { PostProperties } from "src/domain/post/types";

interface IPostInitState {
    posts:PostProperties[];
}

const postInitState:IPostInitState = {
    posts: []
};

export const usePostStore = defineStore({
    id:'post',
    state:()=> (postInitState),
    actions: {
        savePosts(posts:PostProperties[]) {
            this.posts = posts
        }
    }
})

const definedStore = usePostStore();
export type PostStore = typeof definedStore;