import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonPage, IonRouterOutlet, IonRow, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { logInOutline, personAddOutline, personCircle } from "ionicons/icons";
import { Redirect, Route, useHistory } from 'react-router';
import Home from './Home';
import './Welcome.css';
const Welcome: React.FC = () => {

    return (

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Finology</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonReactRouter>
                <IonRouterOutlet>
                    <Route exact path="/welcome">
                        <Home />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/welcome" />
                    </Route>
                </IonRouterOutlet>
            </IonReactRouter>

            <IonFooter className="ion-no-border">
                <IonToolbar>
                    <IonTitle><i className="font-small">All rights reserved.</i></IonTitle>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default Welcome;