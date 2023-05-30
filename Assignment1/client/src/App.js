import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';

function App() {
  
  

  return (
    <div class="container-fluid">
      <div class="row">
      <div class="col-md-3 col-lg-2 background-nax sidebar">
        <div class="sidebar-header">
          <img src='doctor.jpeg' class="rounded image-doc"/>
          <h3>Rhea Thomas</h3>
        </div>
        <ul class="list-unstyled components">
          <li class="active text-dark">
            <a href="#">Home</a>
          </li>
          <li class="text-dark">
            <a href="#">Patient Records</a>
          </li>
          <li class="text-dark">
            <a href="#">Appointment Schedulling</a>
          </li>
          <li class="text-dark">
            <a href="#">Remote Consultation</a>
          </li>
          <li class="text-dark">
            <a href="#">Schedule</a>
          </li>
        </ul>
      </div>
      <section class="col-md-9 col-lg-10">
        <div class="navbar navbar-dark background-nax">
          <div class="container navbar-brand"> <b>Welcome</b>
            <ul class="navbar-nav ml-auto">
                <li class="links">
                <a href="#" class="btn btn-link text-white"> Community </a> <a href="#" class="btn btn-danger text-white"> logout </a></li>
            </ul>
          </div>
        </div>
        
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-lg-4">
              <div class="m-5">
                <h1>12/05/2023</h1>
                <h2>01:13 PM</h2>
              </div>
              </div>
              <div class="col-md-6 col-lg-8">
              <h1 class="ml-5">Temperature</h1>
              <div class="container">
                <div class="row">
                <div class="m-2 col-md-3 bg-dark">
                    <h3 class="text-white d-flex justify-content-center">12</h3>
                    <p class="text-white d-flex justify-content-center">2 PM</p>
                </div>
                <div class="m-2 col-md-3 bg-dark">
                    <h3 class="text-white d-flex justify-content-center">12</h3>
                    <p class="text-white d-flex justify-content-center">3 PM</p>
                </div>
                <div class="m-2 col-md-3 bg-dark">
                    <h3 class="text-white d-flex justify-content-center">12</h3>
                    <p class="text-white d-flex justify-content-center">4 PM</p>
                </div>
                </div>
              </div>
              </div>
              <div class="container">
                <div class="row p-2">
                  <div class="col-md-9">
                    <h1>Appointment Request</h1>
                  </div>
                  <div class="col-md-3">
                    <h1>...</h1>
                  </div>
                </div>
                <div class="navbar navbar-dark border m-2">
                  <div class="container navbar-brand text-dark"> <b>John Doe</b>
                    <ul class="navbar-nav ml-auto">
                        <li class="links">
                        <a href="#" class="btn btn-success"> Accept </a> <a href="#" class="btn btn-danger text-white"> Reschedule </a></li>
                    </ul>
                  </div>
                </div>
                <div class="navbar navbar-dark border m-2">
                  <div class="container navbar-brand text-dark"> <b>Rihanna Dev</b>
                    <ul class="navbar-nav ml-auto">
                        <li class="links">
                        <a href="#" class="btn btn-success"> Accept </a> <a href="#" class="btn btn-danger text-white"> Reschedule </a></li>
                    </ul>
                  </div>
                </div>
                <div class="navbar navbar-dark border m-2">
                  <div class="container navbar-brand text-dark"> <b>Kripa Swaraj</b>
                    <ul class="navbar-nav ml-auto">
                        <li class="links">
                        <a href="#" class="btn btn-success"> Accept </a> <a href="#" class="btn btn-danger text-white"> Reschedule </a></li>
                    </ul>
                  </div>
                </div>

                <div class="container-fluid container">
                  <div class="row">
                    <div class="col-md-6 col-md-6">
                      <h1 class="m-2">Calender</h1>
                      <img src="calender.jpeg" class="image-cal"/>
                    </div>
                    <div class="col-md-6 col-lg-6">
                      <h1 class="m-4">Notifications</h1>
                    <div class="navbar navbar-dark border m-2">
                      <div class="container navbar-brand text-dark">
                        Notification 1
                      </div>
                    </div>
                  <div class="navbar navbar-dark border m-2">
                  <div class="container navbar-brand text-dark">
                    Notification 2
                  </div>
                    </div>
                  <div class="navbar navbar-dark border m-2">
                  <div class="container navbar-brand text-dark">
                    Notification 3
                  </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}

export default App;
