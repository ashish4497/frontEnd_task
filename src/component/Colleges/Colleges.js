import React, { Component } from 'react';
import './colleges.css';
import Data from '../Data.json';
import LazyLoad from 'react-lazyload';
import Spinner from '../Loader/Loader';

export default class Colleges extends Component {
	render() {
		let Colleges = Data.colleges;
		console.log(Colleges[0], 'check the list of data');

		return (
			<>
				<div className='container'>
					<div className='grid-col-2'>
						{Colleges.map((value) => {
							return (
								<LazyLoad
									key={value.ic}
									height={100}
									offset={[-100, 100]}
									placeholder={<Spinner />}>
									<div className='hero_section '>
										<div className='row-1-col-1'>
											<div className='college-image background_image'>
												<div className='overlay'>
													<div className='pointer'>
														<p className='badge'>Promoted</p>
													</div>
													<div className='flex-col-2 colleges-pos'>
														<div className='flex'>
															<div className='rectangle-2 Best-college'>
																{value.tags[0]}
															</div>
															<div className='rectangle-2 Best-college'>
																{value.tags[1]}
															</div>
														</div>
														<div className='ranking Best-college '>
															{value.ranking}
														</div>
													</div>
													<div className='rating Very-Good'>
														<p>{value.rating}</p>
														<p>{value.rating_remarks}</p>
													</div>
												</div>
											</div>
										</div>
										<div className='row-2-col-1 flex-col-2'>
											<div className='col-1-row-1'>
												<div className='flex'>
													<div className='college-name margin-right'>
														<h3 className=''>{value.college_name}</h3>
													</div>
													<i class='fas fa-star'></i>
													<i class='fas fa-star'></i>
													<i class='fas fa-star'></i>
													<i class='far fa-star'></i>
													<i class='far fa-star'></i>
												</div>
												<span className='Near-Vishwavidyalya-Metro-Station'>
													{value.nearest_place[0]}
												</span>
												<span className='Kms-away-from-bus-stand'>
													{value.nearest_place[1]}
												</span>
												<div className='famous_nearest_places text-style-1'>
													{value.famous_nearest_places}
												</div>
												<div className='offertext Rectangle-4 famous_nearest_places'>
													{value.offertext}
												</div>
											</div>
											<div className='col-2-row-1'>
												<span className='original-fee margin-right'>
													Rs {value.original_fees}
												</span>
												<span className='Vector-Smart-Object'>
													{value.discount}
												</span>
												<div>
													<p className='fee-semester text-style'>
														{'Rs' + ' ' + value.original_fees}
													</p>
													<p className='Near-Vishwavidyalya-Metro-Station '>
														{value.fees_cycle}
													</p>
												</div>
												<div className='Free-Cancellation'>
													<span className='margin-right'>
														{value.amenties[0]}
													</span>
													<span>{value.amenties[1]}</span>
												</div>
											</div>
										</div>
									</div>
								</LazyLoad>
							);
						})}
					</div>
				</div>
			</>
		);
	}
}
