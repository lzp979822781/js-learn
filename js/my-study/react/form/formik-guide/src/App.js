import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

function App() {
	const formik = useFormik({
		initialValues: {
			username: '',
			password: ''
		},
		/* validate: values => {
			const errors = {};
			if (!values.username) {
				errors.username = '请输入用户名';
			} else if (values.username.length > 15){
				errors.username = '用户名的长度不能大于15';
			}

			if(!values.password) {
				errors.password = '请输入密码';
			} else if(values.password.length > 6) {
				errors.password = '密码长度不能超过6';
			}
			return errors;
		}, */
		validationSchema: Yup.object({
			username: Yup.string()
				.max(15, '用户名的长度不能大于15')
				.required('请输入用户名'),
			password: Yup.string()
				.min(6, '密码长度不能小于6')
				.required('请输入密码')
		}),
		onSubmit: values => {
			console.log('values', values);
		}
	});
	return (
		<form onSubmit={formik.handleSubmit}>
			<input
				type='text'
				name='username'
				{...formik.getFieldProps('username')}
			/>
			<p>{formik.touched.username && formik.errors.username ? formik.errors.username : ''}</p>
			<input
				type='password'
				name='password'
				{...formik.getFieldProps('password')}
			/>
			<p>{formik.touched.password && formik.errors.password ? formik.errors.password : ''}</p>
			<input type='submit'/>
		</form>
	);
}

export default App;