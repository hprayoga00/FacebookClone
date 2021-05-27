import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
                image='https://nwscdn.com/media/catalog/product/cache/all/thumbnail/800x/9df78eab33525d08d6e5fb8d27136e95/5/k/5kg.jpg'
                profileSrc='https://static.bangkokpost.com/media/content/20200903/c1_3738615.jpg'
                title='The Rock'
            />
            <Story
                image='https://i.ytimg.com/vi/xSs4yUZhb-I/maxresdefault.jpg'
                profileSrc='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ece6eed1061240006af3da0%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1271%26cropX2%3D3410%26cropY1%3D153%26cropY2%3D2290'
                title='Stephen Curry'
            />
            <Story
                image='https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg'
                profileSrc='https://cdn.britannica.com/s:800x450,c:crop/43/172743-138-545C299D/overview-Barack-Obama.jpg'
                title='Barack Obama'
            />
            <Story
                image='https://awsimages.detik.net.id/community/media/visual/2018/09/10/4d56ba7e-27a0-4df8-b7e8-20eb01d71b63_43.jpeg?w=700&q=90'
                profileSrc='https://cdn0-production-images-kly.akamaized.net/ZxoPMEB4sdLVO_ql1RZWqSDM60Q=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1089292/original/073246800_1450518161-raffi22.jpg'
                title='Raffi Ahmad'
            />
            <Story
                image='https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1569983043/bas2uwtgwrj8szwchprd.jpg'
                profileSrc='https://assets.pikiran-rakyat.com/crop/3x282:688x907/x/photo/2020/10/10/2212111952.png'
                title='Jennie Blackpink'
            />
        </div>
    )
}

export default StoryReel
