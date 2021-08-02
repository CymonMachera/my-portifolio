import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  config: any;
  projects = [
    {
      id: 1,
      title: 'dLab Drive',
      desc: 'A file management system.It allows uploading of Images, videos of and most other file formarts. It Can be customized to fit the requirement of any company',
      livedem: 'http://196.45.37.197:8089/',
      githurl: 'https://github.com/CymonMachera/Dlab-Ddrive',
      // mediumlink: 'none for now',
      imgUrl: 'assets/images/drive.PNG',
      tech: 'Angular 9 , Django, DJango Rest Framework, Shell Scripting, MySQL'
    },
    {
      id: 2,
      title: 'OnSight Helper',
      desc: 'A system to help rise TB suspicion index of health workers when  providing preliminary diagnosis of Tuberculosis. It can be used in areas that there is no enough confirmatory equipments like gene expert and x ray machines, like in rular areas. It is deployed as a mobile app',
      livedem: '',
      githurl: 'https://github.com/CymonMachera/OnSight-Helper',
      // mediumlink: 'none for now',
      imgUrl: 'assets/images/onsight.jpg',
      tech: 'JupyterNotebook, Pandas, numpy, matplotlib, joblib, python scripting, EDA, Flask, pydash, flutter'
    },
    {
      id: 3,
      title: 'APHTA Data Collection Tool',
      desc: 'A system that provide real time data visualization for the data collected by the CHW in five regions of Tanzania.CHW use ODK to collect data and post them on Kobo-Toolbox API, Kobo-Toolbox provide an endpoint to integrate the data collected into the dashboard developed',
      livedem: '',
      githurl: 'https://github.com/CymonMachera/APHTA-DEMO-FRONT',
      // mediumlink: 'none for now',
      imgUrl: 'assets/images/aphta.PNG',
      tech: 'Angular 9, Django, DJango Rest Framework, kobo-Toolbox, ODK, Digitaocean'
    },
    {
      id: 4,
      title: 'MIMS',
      desc: 'A system to manage the Clubs, Member and Staff information at MKUTA NGO',
      livedem: 'https://mkuta-front.herokuapp.com/home',
      githurl: 'https://github.com/MKUTA-PROJECT',
      // mediumlink: 'none for now',
      imgUrl: 'assets/images/mkuta.PNG',
      tech: 'Angular 9 , Django, DJango Rest Framework'
    },
    {
      id: 5,
      title: 'My Portifolio',
      desc: 'This page is about my portifolio',
      livedem: '',
      githurl: 'https://github.com/CymonMachera/my-portifolio/tree/master',
      // mediumlink: 'none for now',
      imgUrl: 'assets/images/port.PNG',
      tech: 'Angular 9, Bootstrap'
    },
    {
      id: 6,
      title: 'Artist Trend Analyzer',
      desc: 'This is a system to analyze the trend of Tanzanian Artists. It was developed for Slide Digitals during the co-operate Hackthon With Smart code.',
      livedem: '',
      githurl: 'https://github.com/CymonMachera/Artist-Trends-Analyser/tree/master',
      // mediumlink: 'none for now',
      imgUrl: 'assets/images/digital.PNG',
      tech: 'PyDash, Flask, numpy, pandas'
    },
    {
      id: 7,
      title: 'HIV/AIDS Chatbot',
      desc: 'A chatbot based on regular expression to answer basic HIV questions',
      livedem: '',
      githurl: 'https://github.com/CymonMachera/My-chatbot',
      // mediumlink: 'none for now',
      imgUrl: 'assets/images/hiv.PNG',
      tech: 'Flask, SKlearn'
    },
    {
      id: 8,
      title: 'MitandaoPlus Prototype',
      desc: 'Get Tips on the communication regulations according to TCRA, Get tips on how to properly use the communication networks like facebook, Instagram, youtube e.t.c, Get tips on poor conducts when using communication networks. To try it plz Contact Me',
      livedem: '',
      githurl: '',
      // mediumlink: 'none for now',
      imgUrl: 'assets/images/mitandao.PNG',
      tech: 'Textit'
    },

  
  ]
  constructor() { }

  ngOnInit() {
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.projects.length
    };
  }

  pageChanged(event){
    this.config.currentPage = event;
  }
}
