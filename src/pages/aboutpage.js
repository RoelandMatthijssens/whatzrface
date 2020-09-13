
import React, { useState } from 'react'
import { BasicLayout } from '../components/layout'
import { Form, Button, Row, Col, Image, Alert } from 'react-bootstrap';
import { SparqlClient } from '../utils';
import { Formik } from 'formik';
import * as Yup from 'yup';

const AboutPage = () => {
    return (
        <BasicLayout>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis, mi sit amet dapibus rhoncus, nibh sapien vehicula magna, ac scelerisque metus nibh sed mi. In porta orci neque, id condimentum urna fermentum vitae. Vivamus vehicula orci ligula. Etiam suscipit, mauris ut vulputate dignissim, massa arcu venenatis ex, eu euismod velit nibh sit amet sapien. Aenean semper ipsum sed convallis sollicitudin. Donec et bibendum ligula. Vivamus at molestie ligula. Donec viverra magna eu aliquam porttitor. Morbi sed dolor a mauris imperdiet fermentum eget eu nisl. Sed non nisl non felis dapibus accumsan quis vitae neque. Duis fringilla nisi mauris, in ullamcorper ante blandit tristique. Donec ac nulla nisl. Curabitur vel eros justo.</p>
            <p>Nunc finibus, risus et feugiat sollicitudin, ligula purus imperdiet ipsum, vel viverra metus ante vitae tellus. Cras lobortis mauris et mauris rhoncus blandit. Pellentesque eleifend enim a facilisis molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas quis convallis leo. Donec pharetra eleifend ipsum. Donec pharetra gravida tortor, quis commodo est molestie in. Sed id nisi vel nisi aliquet placerat. Sed eget lobortis mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris at justo lobortis turpis viverra ultricies.</p>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus leo justo, vestibulum non arcu at, laoreet mattis leo. Aenean condimentum risus quis ex tincidunt, vitae tristique lorem ornare. Pellentesque nec ex quis dolor sagittis ultrices. Maecenas eu leo lectus. In malesuada purus magna, vitae interdum lacus interdum quis. Praesent dictum in enim eu vehicula. Aliquam hendrerit diam vel mi aliquam, quis pulvinar purus consequat. Quisque tincidunt eu leo quis facilisis. Maecenas cursus auctor augue. Nullam lacinia lectus eget ante sollicitudin sodales. Sed nisi libero, tristique quis placerat eget, pharetra sit amet sapien. Cras vel tellus sem.</p>
            <p>Nulla vitae odio tempus, vehicula eros vitae, tincidunt risus. Aenean sed sapien sed lacus ultrices egestas non non quam. Praesent non eros mi. Vivamus iaculis varius ex in sollicitudin. Suspendisse vulputate ante leo, non viverra ipsum vestibulum quis. Aenean mauris felis, consequat vel nisl et, faucibus eleifend mauris. Fusce quis libero ac mi volutpat efficitur vitae ut dui. Aliquam et hendrerit massa, eget placerat dui. Nullam ultrices, nulla at pharetra blandit, velit ipsum efficitur orci, a aliquam felis magna et orci. Duis id tristique ex, sed ultrices tellus. Donec sit amet ex sit amet orci rhoncus finibus sit amet sit amet nisl. Nulla facilisi. Sed varius ex ut nisi blandit, sit amet volutpat tellus finibus.</p>
            <p>Curabitur convallis augue ligula, a interdum arcu consectetur a. Integer sodales ligula eget tellus consequat, sit amet tincidunt orci fringilla. Donec maximus nisi nulla, in ultrices tellus pretium vel. Suspendisse vel justo rutrum, placerat quam at, placerat augue. Etiam cursus tellus at dolor euismod, sit amet convallis est hendrerit. Etiam iaculis tincidunt bibendum. Pellentesque pharetra nibh ut sollicitudin fermentum. Vestibulum libero quam, pharetra sed elit vel, posuere laoreet enim. Phasellus tempor porttitor venenatis. Aliquam tincidunt dui vitae lobortis tempus. Nunc non cursus nulla, a tristique sapien. Nunc dictum ultrices metus, eu blandit neque commodo sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </BasicLayout >
    )
}


export default AboutPage