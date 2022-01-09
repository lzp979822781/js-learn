function Post({data}) {
    const {id, title} = data;

    return (
        <div>
            <span>{id}</span>
            <span>{title}</span>
        </div>
    );
}

export function getStaticPaths() {
    // fallback为false展示404页面，否则继续往下执行
    return {
        paths: [{params: {id: '1'}}, {params: {id: '2'}}],
        fallback: false
    }
};

export const getStaticProps = ({params}) => {
    const {id} = params;
    let data = {};
    switch(id) {
        case '1':
            data = {id: 1, title: 'title1'};
            break;
        case '2':
            data = {id: 2, title: 'title2'};
            break;
        default:
            data = {};
    }

    return {
        props: {
            data
        }
    }
};

export default Post;