import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import algorithmLogo from './algorithmLogo.png';
import projectLogo from './projectLogo.png';
import skillLogo from './skillLogo.png';
import redis from './redis.png';
import idea from './idea.png';
import mysql from './mysql.png';
import springboot from './springboot.png';
import github from './github.png';
import rabbitmq from './rabbitmq.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    algorithmLogo,
    projectLogo,
    skillLogo,
    mysql,
    redis,
    springboot,
    idea,
    github,
    rabbitmq,
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.algorithmLogo, title: '快排的稳定性', description: '探索快速排序算法的稳定性实现', link: './blogs/001.html' },
    { icon: assets.algorithmLogo, title: '二项队列', description: '深入理解数据结构之二项队列，并且给出具体实现', link: '' },
    { icon: assets.algorithmLogo, title: '平衡二叉树、红黑树', description: '深入理解平衡二叉树与红黑树，并给出具体实现', link: '' },
    { icon: assets.skillLogo, title: 'MySQL底层数据结构', description: '深入探索并理解MySQL底层数据结构', link: '' },
    { icon: assets.skillLogo, title: 'Cookie、Session、JWT', description: '理解分析比较检验登录状态的三种技术', link: '' },
    { icon: assets.projectLogo, title: 'SSHManage', description: '个人项目，实现了基于Web的远程服务器连接系统', link: '' },
    { icon: assets.projectLogo, title: 'SmartRPC', description: '个人项目，实现了rpc框架，用于深入理解rpc技术', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Skills', description: 'Java, SpringBoot, Redis, MyBatis, MQ, ...' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: '电子科技大学计算机科学与技术专业硕士研究生' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: '独立完成了四个以上的项目' }
];

export const toolsData = [
    assets.vscode, assets.redis, assets.springboot, assets.mysql, assets.idea, assets.github,assets.git, assets.rabbitmq
];