import React from 'react';
import './App.css';
import './base.css';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import LoginForm from './components/LoginForm/LoginForm';
import LandingPage from './pages/LandingPage/LandingPage';
import Dashboard from './pages/DashboardPage/Dashboard';
import Preprocess from './pages/PreprocessPage/Preprocess';
import Features from './pages/FeaturesPage/Features';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Model from './pages/ModelPage/Model';
import Community from './pages/CommunityPage/Community';
import PostForm from './components/PostForm/PostForm';

function App() {
	return (
		<Router>
			<div className="App flex flex-col align-center gap-m">
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/register" element={<RegistrationForm />} />
					<Route path="/login" element={<LoginForm />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/data_preprocess" element={<Preprocess />} />
					<Route path="/feature_extraction" element={<Features />} />
					<Route path="/model_run" element={<Model />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/community" element={<Community />} />
					<Route path="/post" element={<PostForm />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
