import React,{useState} from 'react'
import {Typography, Button, Form,message,Input,Icon} from 'antd'
import Dropzone from 'react-dropzone'
import Axios from 'axios'
import {useSelector} from 'react-redux'

const {TextArea} = Input
const {Title} = Typography

const PrivateOptions = [
    {value :0, label:"Private"},
    {value :1, label:"Public"}
]

const CategoryOptions = [
    {value:0 , label : "Film & Animaion"},
    {value:1, label: "Auto & Vehicles"},
    {value:2, label: "Music"},
    {value:3, label: "Pets, Animals"}
]


function VideoUploadPage(props) {
    const user = useSelector(state => state.user)
    {/*useState는 값을 저장한다 . 저장 후 서버에 보낼때 state에 있는 것들을 한꺼번에 보낸다. */}
    const [VideoTitle, setVideoTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Private, setPrivate] = useState(0) 
    {/* Private = 0 , Public = 1 */}
    const [Category, setCategory] = useState("Film& Animation")
    const [FilePath, setFilePath] = useState("")
    const [Duration, setDuration] = useState("")
    const [ThumbnailPath, setThumbnailPath] = useState("")


    /* TextArea에 텍스트를 입력하기 위해서 설정해줘야 한다.*/
    const onTitleChange = (e) =>{ 
        setVideoTitle(e.currentTarget.value)
    }
    const onDescriptionChange = (e) =>{
        setDescription(e.currentTarget.value)
    }
    const onPrivateChange = (e) =>{
        setPrivate(e.currentTarget.value)
    }
    const onCategoryChange = (e) =>{
        setCategory(e.currentTarget.value)
    }
    const onDrop = (files) => {

        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        console.log(files)
        formData.append("file", files[0])

        Axios.post('/api/video/uploadfiles', formData, config)
            .then(response => {
                if (response.data.success) {

                    let variable = {
                        filePath: response.data.filePath,
                        fileName: response.data.fileName
                    }
                    setFilePath(response.data.filePath)

                    //gerenate thumbnail with this filepath ! 

                    Axios.post('/api/video/thumbnail', variable)
                        .then(response => {
                            if (response.data.success) {
                                setDuration(response.data.fileDuration)
                                setThumbnailPath(response.data.thumbsFilePath)
                            } else {
                                alert('Failed to make the thumbnails');
                            }
                        })


                } else {
                    alert('failed to save the video in server')
                }
            })

    }

    const onSumit = (e) => {
        e.preventDefault() // 하고 싶은 동작을 할 수 있도록 방지
        
        const variable = {
            writer :user.userData._id,
            title :VideoTitle,
            description:Description,
            privacy:Private,
            filePath:FilePath,
            category:Category,
            duration:Duration,
            thumbnail:ThumbnailPath
        }


        Axios.post('/api/video/uploadVedio',variable)
        .then(response=>{
            if(response.data.success){
                message.success('upload success!') // 성공 알람

                setTimeout(()=>{ //3초뒤에 푸쉬
                    props.history.push('/')
                },3000)

            }else{
                alert('vedio upload fail!!')
            }
        })
        

    }

    return (
        <div style={{maxWidth:'700px', margin:'2rem auto'}}>
            <div style={{ textAlign:'center', marginBottom:'2rem'}}>
                <Title level={2}>Upload Video</Title>
            </div>

            <Form onSubmit = {onSumit}>
                <div style={{display :'flex', justifyContent:'space-between'}}>
                    {/*Drop zone */}
                    <Dropzone
                    //accept = "video/*"
                        onDrop = {onDrop}
                        multiple = {false}
                        maxSzie = {800000000}>
                    {({ getRootProps, getInputProps }) => (
                        <div style ={{ width: '300px', height: '240px', border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center'}}{...getRootProps()}>
                                     <input {...getInputProps()}/>
                                     <Icon type ='plus' style={{fontSize:'3rem'}} />
                        </div>
                    )}

                    </Dropzone>
                    {/*Thumbnail */}

                    {ThumbnailPath !== "" &&
                        <div>
                            <img src={`http://localhost:5000/${ThumbnailPath}`} alt="Thumbnail" />
                        </div>
                    }
        </div>
        <br/>
        <br/>
        <label>Title</label>
        <Input
            onChange = {onTitleChange}
            value = {VideoTitle}
        />
        <br/>
        <br/>
        <label>Description</label>
        <TextArea
            onChange = {onDescriptionChange}
            value = {Description}
        />
        <br/>
        <br/>

        <select onChange = {onPrivateChange}>
            {PrivateOptions.map((item,index)=>(
                <option key={index} value={item.value}>{item.label}</option>
            ))}
        </select>
        <br/>
        <br/>
        <select onChange = {onCategoryChange}>
            {CategoryOptions.map((item,index)=>(
                <option key={index} value={item.value}>{item.label}</option>
            ))}
        </select>
        <br/>
        <br/>
        <Button type ="primary" size = "large" onClick={onSumit}>
            Submit
        </Button>
            </Form>
        </div>
    )
}

export default VideoUploadPage
