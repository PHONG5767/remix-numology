import HookBlog from "../../Hook"
import { contentHeader, img } from "../../Content"
import { NummainContent } from "../../../../Components/Content/Report"
const ContentBlogNum2 = () => {
    const number = 2
    return (
        <>
        <HookBlog header={contentHeader[`num${number}`]} img={img[`num${number}`]} content={NummainContent[`num${number}`]} />
        </>
    )
}
export default ContentBlogNum2