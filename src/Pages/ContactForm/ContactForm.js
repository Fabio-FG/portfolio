import './ContactForm.css'


function ContactForm() {
    return ( 
    <div>
        <form>
          
            <label for="name" />
            <input type="text" placeholder="Name"/>
            <label for="email"/>
            <input type="email" placeholder="email"/>
            <textarea placeholder='Write your comment'></textarea>
<button type="submit">Send Message</button>

        </form>
    </div>
     );
}

export default ContactForm;