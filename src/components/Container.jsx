import Form from "./Form";

export default function Container() {
	return (
		<div className="Container-grid">
			<div className="Container-title">3 STEPS TO BEGIN LEADING CHANGE LIKE A GENIUS</div>
			<div className="Container-paragraph1">Your organization has just decided to roll out new technology. Simple enough, right? Many organizations make the mistake of assuming their employees will “...just adapt to the new system after they get used to it.” Benchmark data shows that if you don’t plan for the change, especially when it comes to PEOPLE, you will be <b>70% more likely to fail!</b> Think about the time, money and productivity that will be impacted. </div>
			<div className="Container-paragraph2">But don’t worry! You can breath a bit easier if you follow these 3 simple steps. Complete the form below to get <i>your</i> checklist to to begin leading change like a genius. You can stop the frustration when it comes to gaining buy-in. We’ve got you!</div>
			<div className="Container-form"><div className="Container-form-text">Complete the information below to get your FREE copy!</div><Form/></div>
		</div>
	);
}
