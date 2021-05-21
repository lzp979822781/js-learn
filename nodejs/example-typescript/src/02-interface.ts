export {}; // 确保跟其他示例中成员变量没有冲突

interface Post {
    // 可以使用分号分隔
    title: string
    content: string
    subTitle?: string
    readonly summary: string
}

function printPost(post: Post) {
    console.log(post.title);
    console.log(post.content);
}

const hello: Post = {
    title: 'aaa',
    content: 'bbbb',
    summary: 'ccc'
};
