import IconSuccess from '../assets/images/icon-success.svg'

function Thanks({email, setIsSubmitted, setEmail}) {

    const handleDismiss = () => {
        setIsSubmitted(false)
        setEmail();
    }

    return (

        <div className="thank-you">
            <picture>
                <img src={IconSuccess} />
            </picture>
            <h1>Thanks for subscribing</h1>
            <p>
                Conformation email has been sent to {email}. Please open it and click on the button inside to confirm your subscription.
            </p>
            <button className="btn" onClick={handleDismiss}>Dismiss message</button>
        </div>
    )
}

export default Thanks