import React, { useState } from 'react'
import { Faq } from '../components';
import banner from '../assets/faq.webp'
const Faqs = () => {
    const [faqs, setfaqs] = useState([{
        question: "Is EMS more efficient than conventional exercise in the gym?",
        answer: "A 30-minute EMS workout Is equivalent to 3 hours of a conventional workout! It activates the whole muscular system of the body stimulating 10 muscle groups with agonist, antagonist and deeper- lying muscles around 150 times in 4 - second Intervals.",
        open: true
    }, {
        question: "How long do the sessions last?",
        answer: "The EMS sessions last 30 minutes including suiting up and a short relaxation part after the workout. If It Is your first time, we will include a brief introduction of EMS and our equipment.",
        open: false
    }, {
        question: "Can the EMS session be longer than 30 minutes?",
        answer: "Yes, depending on your threshold and performance.",
        open: false
    }, {
        question: "Why Is EMS training more effective than conventional training?",
        answer: "EMS recruits over 90% of the muscle fibers at the same time while contracting all major muscle groups simultaneously which is why two sessions of EMS a week is recommended giving 72 hours rest and recovery period to the muscles.",
        open: false
    }, {
        question: "How soon will I see the results?",
        answer: "Within 3 to 4 weeks you should begin to see results, although you may feel better after only a few sessions.",
        open: false
    }, {
        question: "What is the age limit for EMS training?",
        answer: "The minimum age for using the machinery is 16, and there is no upper age limit. Our instructors can tailor sessions according to your goals and fitness levels by controlling the intensity of the impulses based on your age and muscle mass density.",
        open: false
    }, {
        question: "Is the electric current dangerous for my nervous system?",
        answer: "No, there is no danger of the electric current damaging the nervous system. The use of low- frequency impulses is widely used in training and rehabilitation therapy, and EMS uses the natural principle of sending electrical impulses directly to the muscles.",
        open: false
    }, {
        question: "Should I avoid EMS training if I have certain health conditions?",
        answer: "Most people can use EMS training but if you have a certain health condition that prevents you from participating in conventional sport then you must get approval from your doctor.",
        open: false
    }, {
        question: "Is EMS suitable for post-natal training?",
        answer: "There are numerous studies that clearly indicate that EMS quickly and effectively trains the deep pelvic floor muscles. It is an elegant countermeasure to a tendency towards incontinence. The positive effects naturally apply to all of the connective tissue and skin structures that are stretched and overstretched during pregnancy. IMPORTANT: Consult your gynecologist and do not begin training until five to six months after delivery. Training starts at a very low intensity, which also serves as lymph drainage. Depending on how the body reacts, the intensity is increased gradually over the course of multiple sessions.",
        open: false
    }, {
        question: "Are there any health benefits from using it?",
        answer: "Yes. There are many benefits to using electrical muscle stimulators. In addition to the cosmetics effects for fast recovery, to helping with shaping and toning your body, they help remove toxins and improve circulation and posture. It provides relief from stress and discomfort caused by overworked muscles and contributes to an overall relaxed and refreshing feeling. It is also used for rehabilitation post-injury for joint-sparing muscle formation and targeted back exercises.",
        open: false
    }, {
        question: "Who introduced EMS for training?",
        answer: "It was introduced by Germans around ten years ago. However conventional EMS Is being used by physiotherapists for rehabilitation for a long time. They use small wired EMS patches.",
        open: false
    }, {
        question: "Is EMS safe?",
        answer: "Low-frequency current stimulation as used in EMS is absolutely harmless. During the training with current stimulation, the human impulse is simply fortified by the additional impulse from the outside. Therefore, the electrical impulse seems natural to the body. ",
        open: false
    }, {
        question: "Where is EMS used?",
        answer: "It's used by actors, athletes, footballers and housewives, people with sedentary jobs, models, and old people for rehabilitation.",
        open: false
    }, {
        question: "Which famous personality uses EMS?",
        answer: "Internationally by Spiderman - Tom Holland, Pop Singer Rihanna, Benzema, Usain Bolt, Mike Tyson, leading football clubs like Real Madrid & many more. In India, we are training Shahrukh Khan, Gauri Khan, Ekta Kapoor, Jacqueline Fernandez, Huma Qureshi, Amaal Malik, Indian Hockey Team duo - Yuvraj & Devinder Walmiki and many more.",
        open: false
    }, {
        question: "How long should you use Electrical Muscle Stimulation?",
        answer: "EMS can be used for an indefinite period, as it will only enhance your condition. Since it can be integrated with various workouts such as Functional training, Zumba, and Pilates it will never get monotonous and it will always show a massive improvement in your muscle strength andconditioning."
    }
    ]);
    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }
            return faq;
        }))
    }
    return (
        <div>
            <div style={{ position: "relative", lineHeight: "0" }}>
                <img src={banner} className='banner_image' />
                <h1 style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", color: "#fff" }}>FAQs</h1>
            </div>
            <div className="faq padded" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
                <div className="faqs">
                    {faqs.map((faq, i) => (
                        <Faq faq={faq} index={i} toggleFAQ={toggleFAQ} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faqs