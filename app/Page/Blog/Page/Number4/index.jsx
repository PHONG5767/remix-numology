import HookBlog from "../../Hook"
import { contentHeader, img } from "../../Content"
import { NummainContent } from "../../../../Components/Content/Report"
const ContentBlogNum4 = () => {
    const number = 4
    return (
        <>
        <HookBlog header={contentHeader[`num${number}`]} img={img[`num${number}`]} content={NummainContent[`num${number}`]} />
        </>
    )
}
export default ContentBlogNum4