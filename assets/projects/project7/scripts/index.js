const momInfluencer = document.getElementById('mom_influencer');

const imageApi = [
    {
        id: 1,
        title: 'image1',
        url: 'images/image1.jpg'
    },
    {
        id: 2,
        title: 'image2',
        url: 'images/image2.jpg'
    },
    {
        id: 3,
        title: 'image3',
        url: 'images/image3.jpg'
    },
    {
        id: 4,
        title: 'image4',
        url: 'images/image4.jpg'
    },
    {
        id: 5,
        title: 'image5',
        url: 'images/image5.jpg'
    },
    {
        id: 6,
        title: 'image6',
        url: 'images/image6.jpg'
    }
]

function renderImage () {
    imageApi.forEach(image => {
        return "<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'><img src='"+image.url+"' alt='alt'></div>"
    });
}