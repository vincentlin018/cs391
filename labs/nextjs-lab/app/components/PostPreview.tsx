import { PostProps } from "@/types";

export default function PostPreview( { post }: { post: PostProps }) {
    return (
        <div className="bg-sky-400 rounded-x1 p-4 m-2 w-96">
            <h4 className="font-bold text-3xl">{post.title}</h4>
            <h6 className="font-thin text-2xl">{post.content}</h6>
            <p>{post.upvotes - post.downvotes}</p>
        </div>
    );
}