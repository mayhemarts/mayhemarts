import { useState, useRef } from 'react';
import Input from '../ui/fields/Input';
import Textarea from '../ui/fields/Textarea';
import { contactInfo } from '@/staticData/home/home';
import { BsArrowRight } from 'react-icons/bs';
import ContactInfoItem from './ContactInfoItem';

const ContactMe = () => {
	const [formValues, setFormValues] = useState({
		firstname: '',
		laststname: '',
		email: '',
		subject: '',
		message: '',
	});

	const { firstname, lastname, email, subject, message } = formValues;

	const reset = () => {
		setFormValues({
			firstname: '',
			lastname: '',
			email: '',
			subject: '',
			message: '',
		});
	};

	const handleChange = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('formValues', formValues);

		// reset after form submit
		reset();
	};

	// Ref for the hidden submit button
	const submitButtonRef = useRef(null);

	const handleCustomSubmit = () => {
		// Trigger the hidden submit button
		submitButtonRef.current.click();
	};
 
	return (
		<div className="contact" data-title="Contact" id="contact">
			<div className="container">
				<div className="section-title">
					<h2 className="title">
						<span>Contact</span> Me
					</h2>
				</div>

				<div className="row align-items-lg-center">
					<div className="col-lg-6">
						<div className="contact-form">
							<form data-netlify="true" name="contact" onSubmit={handleSubmit}>
								<div className="row">
									<div className="col-lg-6">
										<div className="form-group form-floating">
											<Input
												placeholder="First Name"
												label="First Name"
												handleChange={handleChange}
												name="firstname"
												value={firstname}
											/>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group form-floating">
											<Input
												placeholder="Last Name"
												label="Last Name"
												handleChange={handleChange}
												name="lastname"
												value={lastname}
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-12">
										<div className="form-group form-floating">
											<Input
												type="email"
												placeholder="Email Address"
												label="Email Address"
												handleChange={handleChange}
												name="email"
												value={email}
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-12">
										<div className="form-group form-floating">
											<Input
												placeholder="Your Subject"
												label="Your Subject"
												handleChange={handleChange}
												name="subject"
												value={subject}
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-12">
										<div className="form-group form-floating">
											<Textarea
												label="Your Message"
												handleChange={handleChange}
												name="message"
												value={message}
											/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-12">
										<div className="form-group form-floating">
											{/* Hidden submit button */}
											<button
												type="submit"
												className="theme-btn border-0"
												style={{ display: 'none' }}
												ref={submitButtonRef}
											>
												SUBMIT NOW
											</button>
											{/* Custom submit button */}
											<button
												type="button"
												className="theme-btn border-0"
												onClick={handleCustomSubmit}
											>
												SUBMIT NOW <BsArrowRight className="ms-2" size={25} />
											</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="contact-info">
							{contactInfo?.map((item) => (
								<ContactInfoItem key={item?.id} {...item} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactMe;
