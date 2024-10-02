import React from 'react';
import videoLogo from "../assets/video-posting.png";
import {
    Button,
    Card,
    Label,
    FileInput,
    TextInput,
    Textarea,
    Progress,
    Alert,
  } from "flowbite-react";
//import axios from "axios";

function VideoUpload() {
    return (
        <div className="text-white">
            <Card className="flex flex-col items-center justify-center">
                <h1>Upload Videos</h1>

                <div>
                    <form
                        noValidate
                        className=" flex flex-col space-y-6"
                        onSubmit={handleForm}
                    >
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="file-upload" value="Video Title" />
                            </div>
                            <TextInput
                                value={meta.title}
                                onChange={formFieldChange}
                                name="title"
                                placeholder="Enter title"
                            />
                        </div>

                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="comment" value="Video Description" />
                            </div>
                            <Textarea
                                value={meta.description}
                                onChange={formFieldChange}
                                name="description"
                                id="comment"
                                placeholder="Write video description..."
                                required
                                rows={4}
                            />
                        </div>

                        <div className="flex items-center space-x-5 justify-center">
                            <div className="shrink-0">
                                <img
                                    className="h-16 w-16 object-cover "
                                    src={videoLogo}
                                    alt="Current profile photo"
                                />
                            </div>
                            <label className="block">
                                <span className="sr-only">Choose video file</span>
                                <input
                                    name="file"
                                    onChange={handleFileChange}
                                    type="file"
                                    className="block w-full text-sm text-slate-500
    file:mr-4 file:py-2 file:px-4
    file:rounded-full file:border-0s
    file:text-sm file:font-semibold
    file:bg-violet-50 file:text-violet-700
    hover:file:bg-violet-100
  "
                                />
                            </label>
                        </div>

                        <div className="">
                            {uploading && (
                                <Progress
                                    color="green"
                                    progress={progress}
                                    textLabel="Uploading"
                                    size={"lg"}
                                    labelProgress
                                    labelText
                                />
                            )}
                        </div>

                        <div className="">
                            {message && (
                                <Alert
                                    color={"success"}
                                    rounded
                                    withBorderAccent
                                    onDismiss={() => {
                                        setMessage("");
                                    }}
                                >
                                    <span className="font-medium">Success alert! </span>
                                    {message}
                                </Alert>
                            )}
                        </div>

                        <div className="flex justify-center">
                            <Button disabled={uploading} type="submit">
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </Card>
        </div>
    )
}

export default VideoUpload;