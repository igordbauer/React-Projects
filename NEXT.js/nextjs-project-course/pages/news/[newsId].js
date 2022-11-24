import { useRouter } from "next/router";

const NewsId = () => {
  const router = useRouter()
  console.log(router)
  return (
    <>
      <h1>NewsId</h1>
<p>{router.query.newsId}</p>
    </>
  )
}
export default NewsId;