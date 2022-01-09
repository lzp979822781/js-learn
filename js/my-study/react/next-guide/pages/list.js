import {readFile} from 'fs';
import {join} from 'path';
import {promisify} from 'util';

const read = promisify(readFile);

function List(props) {
    const {data} = props;
    return (
        <div>
            list working
            {data}
        </div>
    );
}

/* export async function getStaticProps() {
    let data = await read(join(process.cwd(), 'pages','_app.js'), 'utf-8');
    return {
        props: {
            data
        }
    }
} */
// 服务端渲染
export async function getServerSideProps(context) {
    console.log('context.query', context.query);
    let data = await read(join(process.cwd(), 'pages','_app.js'), 'utf-8');
    console.log('hello');
    return {
        props: {
            data
        }
    }
}

export default List;