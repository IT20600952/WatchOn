import React, { useState } from "react";
import anacondaImage from '../Image/Tech/anaconda.png';
import colab from '../Image/Tech/colab.png';
import flask from '../Image/Tech/flask.png';
import jupyter from '../Image/Tech/jupyter.png';
import python from '../Image/Tech/python.png';
import react from '../Image/Tech/react.png';
import vscode from '../Image/Tech/vscode.png';

export const Testimonials = (props) => {
  const [activeTab, setActiveTab] = useState("literatureSurvey");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="testimonials" style={styles.testimonials}>
      <div className="container">
        <div className="section-title text-center">
          <h2>Project Domain</h2>
        </div>
        <div className="tabs" style={styles.tabs}>
          {["literatureSurvey", "methodology", "researchProblem", "researchGap", "technologies"].map(tab => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              style={{
                ...styles.tabButton,
                ...(activeTab === tab ? styles.activeTabButton : {})
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, ' $1')}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {activeTab === "literatureSurvey" && (
            <div style={styles.tabBox}>
              <h3>Literature Survey</h3>
              <p>Person identification module of the proposed system focuses on uniquely identifying people by face recognition
                leveraging gait analysis as a benchmark model.This concept
                has a wide range of applications, for an instance, in the
                security monitoring system put forward in uses an algorithm of Multi-task Cascaded Convolutional Neural Network
                (MTCNN) for face detection and FaceNet for face recognition so that identification in the surveillance environment
                is robust. Person tracking and re-identification system built
                for an indoor surveillance system in  uses You Look
                Only Once, YOLO v4 , Convolutional neural networks
                (CNNs) for person detection, MTCNNs for face detection and
                it employs MobileFaceNetwork to generate feature vectors of
                the face. Similarly  presents an enhanced smart doorbell
                system based on face detection with Haar-like filters
                and face recognition with Eigen face algorithm highlighting
                the application of face recognition in security systems. Gait
                analysis, as reviewed in , is categorized into two types
                of gait representations called model-based and model-free.
                Model based approaches include structural and motion models
                while model-free methods include template images, feature
                extraction, shape analysis and spatio-temporal representations.
                An innovative approach proposed in  proposes a new
                spatio-temporal gait representation, called the Gait Energy
                Image (GEI) which effectively captures dynamics of the gait
                cycle, for recognition of individuals by gait. In , a deep
                learning-based person re identification method is introduced
                which leverages body part segmentation and Gaussian filtering to enhance feature extraction. Reference  suggests
                an averaged silhouette to represent the gait cycle and uses
                Principal Component Analysis for dimensionality reduction of
                features. This approach uses a similarity measure for person
                identification while demonstrating the efficacy of averaged
                silhouettes in gait recognition systems. These studies demonstrate the use of face recognition and gait analysis separately in
                surveillance applications to enhance robustness and accuracy
                of the identification process. The proposed system aims to
                integrate the use of both models that would further expand
                the possibilities of accurate person identification by using gait
                analysis as a benchmark model.
                Utilizing the person identification module, the prediction of
                demographic attributes of identified people are explored. The
                literature identifies some gray areas in these systems, especially in identifying an age range and gender demographics
                correctly in various settings where the person would normally
                be seen wearing face masks. It is critical to bridge these gaps to
                make the systems even more reliable and relevant in different
                contexts. With the research  on image gender prediction, it
                shows that a system as such would be beneficial to both social
                media and security applications. The referred study deals with
                challenges such as differences in lighting and face aging
                and attains state-of-the-art performance in gender estimation
                through deep learning methods, proving large improvement of
                accuracy on datasets like Internet Movie Database (IMDb)
                for age progression. In  it discusses the development of a
                system for predicting age and gender; some of the factors in
                consideration are security, health care, and targeted marketing,
                this paper presents the suggestion for an innovative use of
                Deep CNNs to improve the age and gender prediction. The
                proposed network architecture can take the process to a higher
                level of accuracy compared to the conventional ones with Haar
                feature-based cascade classifiers  and help to achieve an
                accuracy of 79% approximately. Research  is a thorough
                analysis of steps, techniques, and algorithms required to realize
                the accuracy of age and gender identification by stressing precision and practicality. This investigation utilizes deep learning
                applied to a large dataset to achieve a gender-age detector.
                In research  it shows that automatic measuring of human
                age using face image analysis is tedious. A locally adapted
                robust regressor with a novel age manifold learning scheme
                for feature extraction of facial aging traits is used in this study.
                The methodology shows superiority in accuracy on the FGNET database and a large independent age database. Moreover,
                the study in  addresses how occlusions and expressions
                affect age and gender prediction. The paper suggests working
                with data augmentation and adversarial training techniques
                to achieve model robustness. The proposed system aims to
                bridge the gaps and overcome the difficulties present in current
                demographic predictors and also explores the novel concept of
                introducing a group demographic predictor.
                Path tracking of identified individuals builds upon the
                unique identifiers generated in the person identification module. Path tracking of people in surveillance videos has got
                significant attention in recent times due to its critical role
                in security. It primarily refers to the monitoring, detecting
                and tracking individuals across different frames of the video.
                The most significant contribution has been the application of
                YOLO , which has become the basis for object detection
                and tracking. People tracking in surveillance applications
                demonstrates how YOLOv5 ,together with OpenCV
                has been effectively applied for person detection and tracking
                in surveillance videos. Person re-identification combined with
                person tracking gave way to new developments in person path
                tracking. Tracking Groups of People in  investigates the
                ResNet50  model in extracting re-identification features
                so that the system can maintain consistent identities for the
                detected people. By this, it enhances the tracking capability
                of persons across time and space, even exiting and re-entering
                a camera’s field of view. Development of a multi-camera
                tracking system as discussed in Motion-based recognition
                a survey  which applies both Kalman filters and deep
                learning-based detections to elevate person tracking accuracy.
                This hybrid approach gets rid of the difficulties brought in by
                occlusions and rapid movements in the environment. Learning
                the distribution of object trajectories for event recognition
                discussed the application of FPGA-based implementations to
                speed up processing of videos. By utilizing hardware-specific
                optimizations, this approach achieves low-latency tracking,
                making it suitable for real-time applications in surveillance
                systems. A few of the challenges that have been present
                for a long time is tackling occlusions and varying lighting
                conditions in dynamic environments. Human Motion Analysis:
                A Review  shows an innovative approach to adapt to these
                challenges which is to combine temporal differencing to adaptive background subtraction, these additions adapt to changes
                in illumination of the background and thereby improve accuracy in environments with fluctuating lighting conditions. The
                Visual Analysis of Human Movement: A Survey  deals
                with the challenges to person tracking in strongly dynamical
                scenes, as in crowds of people. A more robust multi-object
                tracking algorithm integrating motion prediction models and
                deep learning-based detections is provided in this study, which
                handles partial occlusions and abrupt movements. The practical applications of people path tracking are enormous, from
                security surveillance to crowd management, even in behavioral
                analysis. Multi-Object Tracking in Video  explores the
                application of these techniques in monitoring public spaces,
                such as transportation hubs and retail environments. Largescale surveillance settings should be able to track several people over many cameras. Track-based relevance feedback for
                tracing persons in surveillance videos , this work addresses
                how a framework for scalable tracking ensures robustness by
                fusing efficient data association techniques with deep learningbased detections over extended camera networks. The success
                of surveillance systems will bring in demanding requirements
                for more sophisticated, intelligent tracking solutions. Tracking
                and Modeling People in Video Sequences  gives insights
                into emerging trends, in particular, how unsupervised learning
                techniques can make track accuracy even better without large
                amounts of labeled datasets.</p>
            </div>
          )}
          {activeTab === "methodology" && (
            <div style={styles.tabBox}>
              <h3>Methodology</h3>
              <p>The person identification was developed by leveraging face
                recognition with gait analysis as a benchmark model, the
                process began with separate dataset preparation for both face
                Fig. 1. Overall system architecture of proposed approach
                recognition model training and gait analysis model training.
                For face recognition, the dataset was created using YOLO v8
                for face detection on extracted video frames. Then they
                were cropped and labelled with unique identification numbers
                assigned for the subjects appearing in the video. The faces
                were compiled into a dataset containing 100 to 115 images
                per class. Three CNN architectures, MobileNet , VGG-16
                and ResNet50  were trained on this dataset with a
                70:30 train-test split, and data augmentation techniques were
                applied to improve model performance. For gait analysis the
                dataset was created by detecting individuals using YOLO v5
                model on extracted video frames. The detected individuals
                were then cropped and stored in folders labelled under the
                same identification numbers assigned in the face recognition
                dataset. The cropped individual images were then subjected
                to pre-processing steps such as background subtraction and
                silhouette extraction. After extracting silhouettes, the silhouette images were used to create averaged silhouette images
                as representative images for each class with 350 images per
                class. The same CNN architectures, MobileNet , VGG16  and ResNet50  were trained on the averaged
                silhouette dataset using a 70:30 train test split and data
                augmentation and were trained for the classification process.
                During inference the video is split into frames using OpenCV
                then face detection and person detection is done through
                YOLO models. Bounding boxes are drawn around individuals
                during detection and they are assigned tracking numbers. To
                track a person across frames, intersection over union value
                is calculated for bounding boxes in one frame with those in
                the next frame. Every time a new tracking id is issued the
                face recognition model is triggered, and the model predicts
                the registered identification number of the person based on
                the query image fed to the model. Once the prediction is
                made, the confidence value of the prediction is compared with
                the defined threshold confidence value and if the confidence
                value of the prediction is higher, the identification number
                predicted is displayed in the output frame. If the predicted
                confidence is lower than the threshold value, the gait analysis
                model is triggered. The detected person images under the same
                tracking id undergoes pre-processing steps such as background
                subtraction, silhouette extraction and cropping and centering
                the silhouettes. Afterwards the pre-processed silhouettes are
                used to generate the averaged silhouette image which will then
                be given as the query image to the gait recognition model.
                Then, the prediction is made by the gait recognition model,
                and it is displayed on the frame.
                Following person identification, the system transitions to
                age and gender prediction for the identified individuals and
                also extends to group demographic detection. To develop
                an age and gender detection system, the video clips were
                first collected from surveillance footage to ensure that the
                data used were representative. After that, video clips were
                further divided into frames, which were used to build a
                comprehensive dataset of static images for different views,
                illumination conditions, and scenes. Each frame was labeled
                using the LabelImg tool to generate a high quality dataset.
                The model was trained on this dataset with a 80:20 traintest split. Labeled images are fed into a custom CNN model
                that trains to output an age and gender prediction. Following
                hyper-parameter tuning, an optimum model is selected for final
                training and testing of the module. An Open Neural Network
                Exchange (ONNX)  file is created for the model file which
                is used to interpret the result.
                Path tracking of identified individuals builds on the identification and demographic prediction modules to analyze the
                movement of individuals across surveillance footage. The
                methodology for the person tracking system integrates data
                collection, person detection, re-identification of detected people, trajectory tracking of re-identified people, and contextual
                path analysis. The surveillance videos were collected into a
                google drive folder, and each video was approximately 20
                seconds in duration. These videos were pre-processed with
                OpenCV  to uniform the frame rates and resolutions
                before background subtraction to enhance foreground detection. A YOLOv5  model is utilized for person detection,
                considering both speed and accuracy. The detected people
                were then enclosed with bounding boxes to enable the tracking in the subsequent frames. ResNet50 was used for
                person re-identification by extracting unique feature vectors
                for every detected person, capturing all appearance characteristics invariant both to lighting and viewpoint changes.
                A self-supervised learning framework for unsupervised reidentification that refines these feature embeddings to ensure
                the consistent identification of people across different segments of a video was used. Each person was assigned the
                same tag, which made it possible to track individuals through
                unique identification whenever this subject would re-appear in
                other videos. Trajectory tracking involved monitoring people
                moving across frames by linking bounding boxes through the
                extracted feature vectors. To enhance this analysis, paths were
                annotated with some contextual information. This ranged from
                interactions between different people to proximity to some
                specific places like entrance and exit, time spent in those areas,
                etc. Heatmaps were computed to display high-density activity
                zones, therefore giving an insight into movement patterns
                within the monitored area. It provided detailed summaries of
                every single person’s movement, including the time of entry
                and exit, paths taken, time spent in different areas, and interaction with others. Analytical insights that could be derived from
                this are on high-traffic areas, common paths, and regions where
                people like to congregate, hence giving actionable information
                about surveillance and security. At last, metrics like detection
                accuracy, re-identification precision, and tracking consistency
                were used for the evaluation of system performance. These
                evaluation results provided the basis for iterative refinements
                aimed at increasing overall system effectiveness. Table I shows
                how data gathered is being used to perform model training for
                person identification and age and gender prediction.</p>
            </div>
          )}
          {activeTab === "researchProblem" && (
            <div style={styles.tabBox}>
              <h3>Research Problem</h3>
              <p>Traditional surveillance systems are not effective since they
                rely on manual monitoring, and it will face challenges brought
                about by the increased data volumes. They cannot automatically
                detect people, demographically analyze, and track them
                in dynamic high-density areas. Some of the key limitations
                include inaccuracies due to occlusions and low-quality footage
                in face recognition, and tracking of subjects across feeds due to
                modification of environmental conditions like illumination and
                camera angles. Current systems are also limited in scalability
                introducing difficulties in processing video streams efficiently
                to give timely insights. An integrated approach is needed
                for accurate person identification, demographic analysis and
                person path tracking, improving efficiency of applications of
                surveillance systems.</p>
            </div>
          )}
          {activeTab === "researchGap" && (
            <div style={styles.tabBox}>
              <h3>Research Gap</h3>
              <p>Facial recognition alone may not often work, particularly
                in the case of occlusions . Therefore, this methodology
                combines it with gait analysis to provide a very strong and
                complementary method of identification where facial features
                are not clear.
                For such identified people and groups, demographic data
                prediction is done which includes the percentage presence of
                different age groups and genders, the inclusion of a group
                demographic data prediction gives a new dimension to surveillance.
                In-person path tracking: the project takes the challenge of
                re-identifying people across views using unsupervised reidentification.
                It further contributes to novelty by developing
                context-aware path annotations that allow enhanced movement
                tracking with information about interactions, locations, and
                time spent in certain areas.</p>
            </div>
          )}
          {activeTab === "technologies" && (
            <div style={styles.tabBox}>
              <h3>Technologies</h3>
              <p>Technologies used in the project:</p>
              <div style={{ ...styles.techIcons, display: 'flex', flexWrap: 'wrap' }}>
                <img src={anacondaImage} alt="Technologies" style={{ width: '200px', height: 'auto', margin: '5px' }} />
                <img src={colab} alt="Technologies" style={{ width: '250px', height: 'auto', margin: '5px' }} />
                <img src={flask} alt="Technologies" style={{ width: '150px', height: 'auto', margin: '5px' }} />
                <img src={jupyter} alt="Technologies" style={{ width: '150px', height: 'auto', margin: '5px' }} />
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>

                  <img src={python} alt="Technologies" style={{ width: '150px', height: 'auto', margin: '5px' }} />
                  <img src={react} alt="Technologies" style={{ width: '150px', height: 'auto', margin: '5px' }} />
                  <img src={vscode} alt="Technologies" style={{ width: '200px', height: 'auto', margin: '5px' }} />
                </div>
              </div>
            </div>
          )}


        </div>
      </div>
    </div>
  );
};

const styles = {
  testimonials: {
    padding: "40px 20px",
    backgroundColor: "#f9f9f9",
  },
  tabs: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  tabButton: {
    backgroundColor: "#f1f1f1",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s, color 0.3s",
    margin: "0 10px",
  },
  activeTabButton: {
    backgroundColor: "#4CAF50",
    color: "white",
  },
  tabBox: {
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
    backgroundColor: "white",
  },
  techIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
};
