import React from 'react'
import {Formik , Form , Field , ErrorMessage , FieldArray} from 'formik';
import * as Yup from 'yup';


const initialValues = {
    name:'',
    email:'',
    channel:'',
    comments:'',
    address:'',
    social:{
        facebook:'',
        twitter:''
    },
    phonenumbers:['',''],
    phNumbers:['']
}
const onSubmit = values =>{
        console.log('Form Data', values )
    }

const validate = 
    values =>{
            
        let errors = { }
            if(!values.name){
                errors.name = 'Required'
            }
            if(!values.email){
                errors.email = 'Required'
            }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
                errors.email='Invalid email format'
            }

            if(!values.channel){
                errors.channel = 'Required'
            }
            
            return errors
        }
const validationSchema = Yup.object({
    name:Yup.string().required('Required'),
    email:Yup.string().email('Invalid Email Format').required('Required'),
    channel:Yup.string().required('Required')
});


function YoutubeForm() { 
    return (
        <Formik initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit} >
            <Form >
                <div className= 'form-control'>
                <label htmlFor="name">Name</label>
                <Field type='text' id='name' name='name'  placeholder={'Please enter a NAME'}/>
                <ErrorMessage name='name' />
                </div>

                <div className= 'form-control' >
                <label htmlFor="email">Email</label>
                <Field type='email' id='email' name='email'  placeholder={'Please enter a EMAIL'} />
                <ErrorMessage name='email'/>
                </div>

                <div className= 'form-control' >
                <label htmlFor="channel">Channel</label>
                <Field type='text' id='channel' name='channel'  placeholder={'Please enter a CHANNEL name'}/>
                 <ErrorMessage name='channel'/>
                 </div>

                 <div className='form-control'>
                 <label htmlFor='comments'> Comments </label>
                 <Field as='textarea' id='comments' name='comments' />
                 </div>
                <div className='form-control'>
                <label htmlfor='address'>Address</label>
                <Field name='address'>
                    {(props) => {
                        const {field,form,meta } = props
                        console.log('render props', props)
                        return (
                        <div>
                            <input type='text' id='address' {...field}/>
                            {meta.touched && meta.error ? <div>{meta.error}</div>:null}
                        </div>
                        )
                    }}
                 </Field>   
                </div>
                <div className='form-control'>
                    <label htmlFor='facebook'>Facebook Profile</label>
                    <Field type='text' id='facebook' name='social.facebook'></Field>
                </div>

                <div className='form-control'>
                    <label htmlFor='twitter'>Twitter Profile</label>
                    <Field type='text' id='twitter' name='social.twitter'></Field>
                </div>

                <div className='form-control'>
                    <label htmlFor='primaryph'>Primary Phone number</label>
                    <Field type='text' id='primaryph' name='phonenumbers[0]'></Field>
                </div>

                <div className='form-control'>
                    <label htmlFor='secondaryph'>Secondary Phone number</label>
                    <Field type='text' id='secondaryph' name='phonenumbers[1]'></Field>
                </div>
                    <div className='form-control'>
                        <label htmlfor=''>List of Pohone numbers</label>
                        <FieldArray name='phNumbers'>
                            {
                                (fieldArrayProps) => {
                                        console.log('fieldArrayProps',fieldArrayProps)
                                        const{push,remove,form}=fieldArrayProps
                                        const{ values}= form
                                        const {phNumbers} = values
                                        return <div>
                                            {
                                                phNumbers.map((phNumber, index )=>(
                                                    <div key={index}>
                                                        <Field name={`phNumbers[${index}]`}/>
                                                        {
                                                            index>0 &&  (<button type='button' onClick={()=> remove(index)}> {' '}-{' '} </button>)
                                                        }
                                                        
                                                        <button type='button' onClick={()=> push(index)}>{' '}+{' '} </button>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                }
                            }
                        </FieldArray>
                    </div>
                 <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForm;
