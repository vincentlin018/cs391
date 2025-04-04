"use server"
import getCollection, { POSTS_COLLECTION } from '@/db';
import { PostProps } from "@/types";

export default async function createNewPost(
    title: string,
    content: string,
): Promise<PostProps> {
    console.log("Creating new post...");
    const p = {
        title: title,
        content: content,
        upvotes: 0,
        downvotes: 0,
    };

    const postsCollection = await getCollection(POSTS_COLLECTION);
    const res = await postsCollection.insertOne({ ...p });

    if (!res.acknowledged) {
        throw new Error("db insert failed");
    }

    return { ...p, id: res.insertedId.toHexString()}
}