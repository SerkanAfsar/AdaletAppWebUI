import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
});

const Editor = ({ setContent, value }) => {


    return (
        <SunEditor setContents={value}
            onChange={(content) => {
                setContent(content);
            }}
            height='200px' />
    );
};
export default Editor;
