import React from 'react';
import Footer from '../../components/Footer/Footer';
import classes from './About.module.css'


function AboutPage(props, mode, changeMode) {
	return (
		<div>
			<Footer/>
			<h1 className={classes.h1}>О Сайте</h1>
      <p className= {classes.text}>
  Сайт был создан опытной, высококвалифицированной командой разработчиков, дизайн был выполнен за 1 день и является безупречным,
  сайт был написан на REACTе и отвечает всем нынешним тенденциям и соответссвует всем стандартам
        </p>
        
		</div>
	);
}

export default AboutPage;