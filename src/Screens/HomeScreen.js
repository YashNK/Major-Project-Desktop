import React, { useRef } from 'react'
import NavBar from '../Components/NavBar'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './Home.css'
import home from '../assets/home.png'
import { useNavigate } from 'react-router-dom'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import wall from '../assets/home-wall.jpg'
import particles from '../assets/particles.jpg'

const HomeScreen = () => {
  
  const navigate = useNavigate()
  const researchPapersRef = useRef(null);

  const scrollToResearchPapers = () => {
    researchPapersRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
     <div className='wrapper'>
        <header>
          <img src={wall} className='background'/>
          {/* <img src='https://4kwallpapers.com/images/wallpapers/night-sky-colorful-3840x2160-12510.jpg' className='background' /> */}

          <div className='black-layer'></div>

          <h1 className='title'>BETTER SPEAK</h1>
          
          <p className='subtitle'>Welcome to BetterSpeak, are you ready to begin your journey with us.</p>
          <div className='btn-div'>
            <button className='getStarted-btn'  onClick={()=>navigate('/login')}>Get Started</button>
            <button className='research-btn' onClick={scrollToResearchPapers}>Research Papers</button>
          </div>
        </header>

        <section  ref={researchPapersRef}
        className='section1'>
          <h1 className='sec1-header'>RESEARCH PAPERS</h1>
          <div className='cards'>
            <div className='card1'>
              <div className='para-div'>
                <p className='para-bold'>
                  Stuttering Detection Model
                </p>
                <p className='para'>
                Stuttering, a communication disorder characterized by disruptions in the fluency of speech, presents significant challenges in both social interactions and professional settings. Traditional methods of stuttering diagnosis rely heavily on subjective evaluations by speech-language pathologists, leading to inconsistencies and delays in treatment. With the advancements in deep learning techniques and the availability of large datasets, automatic stuttering detection systems have emerged as promising tools for early intervention and personalized therapy.

                This paper provides a comprehensive review of existing stuttering detection methodologies, encompassing both traditional signal processing techniques and recent advancements in deep learning. We analyze the strengths and limitations of these approaches, highlighting the need for robust models capable of handling various speech patterns and environmental conditions.

                Furthermore, we propose a novel deep learning architecture for stuttering detection that leverages the power of recurrent neural networks (RNNs) and attention mechanisms. By integrating long short-term memory (LSTM) units with attention mechanisms, our model effectively captures temporal dependencies within speech sequences while focusing on relevant regions for stutter detection. We train and evaluate the proposed model on a diverse dataset containing recordings of individuals with varying degrees of stuttering severity, achieving state-of-the-art performance metrics.
                </p>
              </div>
              <p className='by'>
                  -By Sahil Shaikh, Sidharth D, Suhail Khan, Yash Kamnani
              </p>
              <button className='view'>View Paper</button>
            </div>
            <div className='card1'>
              <div className='para-div'>
                <p className='para-bold'>
                  PSS Calculation
                </p>
                <p className='para'>
                Accurate and objective measurement of stuttering severity, such as the Percentage of Syllables Stuttered (PSS), plays a crucial role in diagnosing stuttering disorder and monitoring treatment progress. Traditional methods of PSS calculation rely heavily on manual transcription and subjective judgments, leading to inconsistencies and inter-rater variability. In this paper, we propose a novel deep learning-based approach for automatic detection and quantification of stuttered syllables in speech recordings, aiming to provide a reliable and efficient alternative to manual assessment.

                Our model architecture utilizes convolutional neural networks (CNNs) combined with bidirectional long short-term memory (BiLSTM) layers to capture both local and contextual information within speech sequences. By training the model on a diverse dataset comprising recordings from individuals with varying degrees of stuttering severity, we demonstrate its ability to accurately identify and classify stuttered syllables in real-time.

                We evaluate the performance of the proposed model using standard metrics such as accuracy, precision, recall, and F1-score, comparing it against manual annotations by experienced clinicians. The results indicate that our deep learning-based approach achieves high levels of agreement with human raters, surpassing existing methods in terms of accuracy and efficiency.

                Furthermore, we explore the potential applications of automatic PSS detection in clinical settings, teletherapy platforms, and longitudinal studies, highlighting its ability to provide timely feedback to clinicians and individuals undergoing stuttering therapy. By automating the PSS calculation process, our approach streamlines the assessment workflow, reduces the burden on clinicians, and facilitates more frequent and objective monitoring of stuttering severity over time.
              </p>
            </div>
            <p className='by'>
              -By Sahil Shaikh, Sidharth D, Suhail Khan, Yash Kamnani
            </p>
            <button className='view'>View Paper</button>
          </div>
        </div>
        </section>

        <div className='section2'>
            <EnvelopeIcon width={20}/>
            <label className='contact'>  
              Contact Us: Betterspeak@gmail.com
            </label>
        </div>
      </div> 
    </>
  )
}

export default HomeScreen