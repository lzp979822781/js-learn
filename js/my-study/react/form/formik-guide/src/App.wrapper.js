import React from 'react';
import {Formik, Form, Field, ErrorMessage, useField} from 'formik';
import * as Yup from 'yup';

function MyInput({label, ...otherProps}) {
    const [field, meta] = useField(otherProps);
    return (
        <div>
            <label htmlFor={otherProps.id}>{label}</label>
            <Field {...otherProps} {...field} />
            {meta.touched && meta.error ? meta.error : ''}
        </div>
    );
}

function CheckBox({label, ...otherProps}) {
    const [field, meta, helper] = useField(otherProps);
    const {value} = meta;
    const {setValue} = helper;

    const handleChange = () => {
        const set = new Set(value);
        const currentValue = otherProps.value;
        if (set.has(currentValue)) {
            set.delete(currentValue);
        } else {
            set.add(currentValue);
        }

        setValue([...set]);
    };

    return (
        <div>
            <label>
                {/* 设置同样的name属性 当前value通过props获取 */}
                <input type='checkbox' {...otherProps} onChange={handleChange}/>{label}
            </label>
        </div>
    );
}

function App() {

    const initialValues = {
        username: '',
		password: '',
        content: 'aaa',
        hobbies: []
    };

    const handleSubmit = values => {
        console.log('values', values);
    };

    const scheme = Yup.object({
        username: Yup.string()
            .max(15, '用户名的长度不能大于15')
            .required('请输入用户名'),
        password: Yup.string()
            .min(6, '密码长度不能小于6')
            .required('请输入密码')
    });
	return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={scheme}
        >
            <Form>
                <Field name='username' placeholder='请输入用户名' />
                <ErrorMessage name='username' />
                {/* <Field name='password' placeholder='请输入密码' />
                <ErrorMessage name='password' /> */}
                <div>
                    <Field as='textarea' name='content' />
                </div>
                <MyInput label='密码' id='password' name='password' placeholder='请输入密码' />
                <CheckBox value='足球' label='足球' name='hobbies' />
                <CheckBox value='篮球' label='篮球' name='hobbies' />
                <CheckBox value='橄榄球' label='橄榄球' name='hobbies' />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
	);
}

export default App;