import React, { Fragment, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';

const InputGroup = () => {
	const [username, setUsername] = useState(null);
	const [price, setPrice] = useState(null);
	const [website1, setWebsite1] = useState(null);
	const [website2, setWebsite2] = useState(null);

	return (
		<Fragment>
			<div>
				<div className="content-section implementation">
					<h3 className="first">Addons</h3>
					<div className="vertical">
						<div className="p-col-12 p-md-4">
							<div className="p-inputgroup">
								<span className="p-inputgroup-addon">
									<i className="pi pi-user"></i>
								</span>
								<InputText placeholder="Username" />
							</div>
						</div>

						<div className="p-col-12 p-md-4">
							<div className="p-inputgroup">
								<span className="p-inputgroup-addon">$</span>
								<InputText placeholder="Price" />
								<span className="p-inputgroup-addon">.00</span>
							</div>
						</div>

						<div className="p-col-12 p-md-4">
							<div className="p-inputgroup">
								<span className="p-inputgroup-addon">W</span>
								<InputText placeholder="Website" />
							</div>
						</div>
					</div>

					<h3>Multiple Addons</h3>
					<div className="p-grid">
						<div className="p-col-12">
							<div className="p-inputgroup">
								<span className="p-inputgroup-addon">
									<i className="pi pi-clock"></i>
								</span>
								<span className="p-inputgroup-addon">
									<i className="pi pi-star"></i>
								</span>
								<InputText placeholder="Price" />
								<span className="p-inputgroup-addon">$</span>
								<span className="p-inputgroup-addon">.00</span>
							</div>
						</div>
					</div>

					<h3>Checkbox and RadioButton</h3>
					<div className="vertical">
						<div className="p-col-12 p-md-4">
							<div className="p-inputgroup">
								<span className="p-inputgroup-addon">
									<Checkbox checked={username} onChange={(e) => setUsername(!username)} />
								</span>
								<InputText placeholder="Username" />
							</div>
						</div>

						<div className="p-col-12 p-md-4">
							<div className="p-inputgroup">
								<InputText placeholder="Price" />
								<span className="p-inputgroup-addon">
									<RadioButton checked={price} value="price" onChange={(e) => setPrice(e.value)} />
								</span>
							</div>
						</div>

						<div className="p-col-12 p-md-4">
							<div className="p-inputgroup">
								<span className="p-inputgroup-addon">
									<Checkbox checked={website1} onChange={(e) => setWebsite1(!website1)} />
								</span>
								<InputText placeholder="Website" />
								<span className="p-inputgroup-addon">
									<RadioButton
										checked={website2}
										value="price"
										onChange={(e) => setWebsite2(e.value)}
									/>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
export default InputGroup;
