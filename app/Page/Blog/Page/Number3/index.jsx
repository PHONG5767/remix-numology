import HookBlog from "../../Hook"
import { contentHeader, img } from "../../Content"
import { NummainContent } from "../../../../Components/Content/Report"
const ContentBlogNum3 = () => {
    const number = 3
    return (
        <>
        <HookBlog header={contentHeader[`num${number}`]} img={img[`num${number}`]} content={NummainContent[`num${number}`]} />
        </>
    )
}
export default ContentBlogNum3