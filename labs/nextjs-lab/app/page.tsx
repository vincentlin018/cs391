import PostPreview from "./components/PostPreview";

export default function Home() {
  return (
      <div className="flex flex-col items-center bg-blue-200 p-4">
          <PostPreview
            post={{
                id:"id",
                title: "demo post",
                content: "lalalalala",
                upvotes: 20,
                downvotes: 4,
            }}
          />
      </div>
  );
}
