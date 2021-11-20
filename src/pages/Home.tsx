import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/react';
import { logInOutline, personAddOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {

  const history = useHistory();
  const handleNavigation = (route: string) => {
      history.push(route);
  }

  return (
    <IonContent fullscreen>
                <IonCard className="spacer-top-30">
                    <IonCardHeader>
                        <IonCardTitle>Welcome To Finology</IonCardTitle>
                        <IonCardSubtitle>An AI Based Application</IonCardSubtitle>
                        <IonThumbnail className="spacer-top-5">
                            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                        </IonThumbnail>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonList>
                            <IonItem>
                            </IonItem>
                            <IonItem onClick={() => handleNavigation('login')}>
                                <IonIcon slot="end" icon={logInOutline}></IonIcon>
                                <IonLabel>Login to application</IonLabel>
                            </IonItem>
                            <IonItem onClick={() => handleNavigation('register')}>
                                <IonIcon slot="end" icon={personAddOutline}></IonIcon>
                                <IonLabel>Register as new user</IonLabel>
                            </IonItem>

                        </IonList>
                    </IonCardContent>

                </IonCard>



            </IonContent>
  );
};

export default Home;
