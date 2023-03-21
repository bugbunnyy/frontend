import React from 'react';
import { Formik, Form, Field } from 'formik';

const StudentFormBasic = () => {
  const initialValues = {
    student: {
      name: '',
      gender: '',
      adhar_card_number: '',
      dob: '',
      identification_marks: '',
      category: '',
      height: '',
      weight: '',
      mail_id: '',
      contact_detail: '',
      address: '',
    },
    parent: {
      father_name: '',
      father_qualification: '',
      father_profession: '',
      father_designation: '',
      father_aadhar_card: '',
      father_mobile_number: '',
      father_mail_id: '',
      mother_name: '',
      mother_qualification: '',
      mother_profession: '',
      mother_designation: '',
      mother_aadhar_card: '',
      mother_mobile_number: '',
      mother_mail_id: '',
    },
    academic: {
      class_name: '',
      section: '',
      doj: '',
    },
    document_file: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values)
        console.log(JSON.stringify(values));
      }}
    >
      {({ setFieldValue }) => (
        <Form>
          <div>
            <h3>Student Details</h3>

            <div>
              <label>Name:</label>
              <Field
                type='text'
                name='student.name'
              />
            </div>
            <div>
              <label>Gender:</label>
              <Field
                type='text'
                name='student.gender'
              />
            </div>
            <div>
              <label>Aadhar Card Number:</label>
              <Field
                type='text'
                name='student.adhar_card_number'
              />
            </div>
            <div>
              <label>Date of Birth:</label>
              <Field
                type='date'
                name='student.dob'
              />
            </div>
            <div>
              <label>Identification Marks:</label>
              <Field
                type='text'
                name='student.identification_marks'
              />
            </div>
            <div>
              <label>Category:</label>
              <Field
                type='text'
                name='student.category'
              />
            </div>
            <div>
              <label>Height:</label>
              <Field
                type='text'
                name='student.height'
              />
            </div>
            <div>
              <label>Weight:</label>
              <Field
                type='text'
                name='student.weight'
              />
            </div>
            <div>
              <label>Mail ID:</label>
              <Field
                type='email'
                name='student.mail_id'
              />
            </div>
            <div>
              <label>Contact Detail:</label>
              <Field
                type='text'
                name='student.contact_detail'
              />
            </div>
            <div>
              <label>Address:</label>
              <Field
                type='text'
                name='student.address'
              />
            </div>
          </div>

          <div>
            <h3>Father Details</h3>
            <div>
              <label>Father's Name:</label>
              <Field
                type='text'
                name='parent.father_name'
              />
            </div>
            <div>
              <label>Father's Qualification:</label>
              <Field
                type='text'
                name='parent.father_qualification'
              />
            </div>
            <div>
              <label>Father's Profession:</label>
              <Field
                type='text'
                name='parent.father_profession'
              />
            </div>
            <div>
              <label>Father's Designation:</label>
              <Field
                type='text'
                name='parent.father_designation'
              />
            </div>
            <div>
              <label>Father's Aadhar Card:</label>
              <Field
                type='text'
                name='parent.father_aadhar_card'
              />
            </div>
            <div>
              <label>Father's Mobile Number:</label>
              <Field
                type='text'
                name='parent.father_mobile_number'
              />
            </div>
            <div>
              <label>Father's Mail ID:</label>
              <Field
                type='email'
                name='parent.father_mail_id'
              />
            </div>
          </div>

          <div>
            <h3>Mother Details</h3>
            <div>
              <label>Mother's Name:</label>
              <Field
                type='text'
                name='parent.mother_name'
              />
            </div>
            <div>
              <label>Mother's Qualification:</label>
              <Field
                type='text'
                name='parent.mother_qualification'
              />
            </div>
            <div>
              <label>Mother's Profession:</label>
              <Field
                type='text'
                name='parent.mother_profession'
              />
            </div>
            <div>
              <label>Mother's Designation:</label>
              <Field
                type='text'
                name='parent.mother_designation'
              />
            </div>
            <div>
              <label>Mother's Aadhar Card Number:</label>
              <Field
                type='text'
                name='parent.mother_aadhar_card'
              />
            </div>
            <div>
              <label>Mother's Mobile Number:</label>
              <Field
                type='text'
                name='parent.mother_mobile_number'
              />
            </div>
            <div>
              <label>Mother's Mail ID:</label>
              <Field
                type='email'
                name='parent.mother_mail_id'
              />
            </div>
          </div>

          <div>
            <h3>Academic Details</h3>
            <div>
              <label>Class Name:</label>
              <Field
                type='text'
                name='academic.class_name'
              />
            </div>
            <div>
              <label>Section:</label>
              <Field
                type='text'
                name='academic.section'
              />
            </div>
            <div>
              <label>Date of Joining:</label>
              <Field
                type='date'
                name='academic.doj'
              />
            </div>
          </div>

          <div>
            <label>Document File:</label>
            <input
              type='file'
              name='document_file'
              onChange={(event) => {
                setFieldValue('document_file', event.currentTarget.files[0]);
              }}
            />
          </div>

          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default StudentFormBasic;
