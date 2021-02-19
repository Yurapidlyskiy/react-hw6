import React from "react";
import Section from "./Section";
import Components from "./Components";
import Photo from "./Photo";



export default function App(){
    return(
        
        <Section name="Прогноз погоди (19.02)">
            <Photo imgPhoto="https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/07/22/150722141501_weather_man_umbrella_lightnings_624x351_thinkstock.jpg"/>
            <Components sectionName="Температура :" sectionInf={"-4C*"}/>
            <Components sectionName="Вологість :" sectionInf={"68%"}/>
            <Components sectionName="Вітер :" sectionInf={"16 км/год"}/>
        </Section>
       
    );
}