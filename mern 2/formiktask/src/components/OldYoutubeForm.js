import React from 'react'
import {useFormik} from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name:'',
    email:'',
    channel:''
}
const onSubmit = values =>{
        console.log('Form Data', values )
    }

const validationSchema = Yup.object({
    name:Yup.string().required('Required'),
    email:Yup.string().email('Invalid Email Format').required('Required'),
    channel:Yup.string().required('Required')
});


function OldYoutubeForm() { 
    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate,
        validationSchema 
    })  
   console.log('form values',formik.errors);
    return (
        <div className= 'form-control' >
            <form onSubmit={formik.handleSubmit}>
                <div className= 'form-control'>
                <label htmlFor="name">Name</label>
                <input type='text' id='name' name='name'  placeholder={'Please enter a NAME'}
                 onChange={formik.handleChange} 
                 onBlur={formik.handleBlur}
                 value={formik.values.name}/>
                {formik.touched.name && formik.errors.name ?<div className='error'>{formik.errors.name}</div>:null }
                </div>
                <div className= 'form-control' >
                <label htmlFor="email">Email</label>
                <input type='email' id='email' name='email'  placeholder={'Please enter a EMAIL'}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                  value={formik.values.email}/>
                {formik.touched.email && formik.errors.email ?<div className='error'>{formik.errors.email}</div>:null }
                </div>
                <div className= 'form-control' >
                <label htmlFor="channel">Channel</label>
                <input type='text' id='channel' name='channel'  placeholder={'Please enter a CHANNEL name'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                 value={formik.values.channel}/>
                {formik.touched.channel && formik.errors.channel ?<div className='error'>{formik.errors.channel}</div>:null }
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default OldYoutubeForm;
