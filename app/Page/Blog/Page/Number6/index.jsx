import HookBlog from "../../Hook"
import { contentHeader, img } from "../../Content"
import { NummainContent } from "../../../../Components/Content/Report"
const ContentBlogNum6 = () => {
    const number = 6
    return (
        <>
        <HookBlog header={contentHeader[`num${number}`]} img={img[`num${number}`]} content={NummainContent[`num${number}`]} />
        </>
    )
}
export default ContentBlogNum6