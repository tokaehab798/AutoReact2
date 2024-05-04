import React, { useState } from "react";
import { Button, Form, Upload, Input, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { addSuccessStory } from "../../services/successstory";

const AdminAddSuccessstoryV2 = () => {
  const [form] = Form.useForm();

  const [isLoading, setIsLoading] = useState(false);

  const isImage = (file) => {
    return file.type.includes("image/");
  };

  const beforUploadTypeFileIsImage = (file) => {
    if (!isImage(file)) {
      message.error(`${file.name} is not a image file`);
    }

    return isImage(file) || Upload.LIST_IGNORE;
  };

  const imageFileUploadedHandler = async (options) => {
    const { onSuccess, onError, file } = options;
    // setIsLoading(true);

    console.log(file);

    const formData = new FormData();
    formData.append("file", file);

    onSuccess(formData, file);

    // try {
    //     onSuccess(formData);

    // } catch (err) {
    //   onError(err);
    // } finally {
    //   setIsLoading(false);

    //   console.log(formData, onSuccess(formData));
    // }
  };

  const submitHandler = async (values) => {
    // setSubmitButtonDisabled(true);

    const data = {
      ...values,
      mainPicture: values?.mainPicture?.[0]?.originFileObj,
    };

    console.log(values);

    // try {
    //   await addSuccessStory(data);

    //   //   submitSuccess();
    // } catch (err) {
    //   console.error(err);
    // }

    // setSubmitButtonDisabled(false);
  };

  return (
    <section className="container">
      <div className="go-back-container" style={{ marginLeft: "20px" }}>
        <a className="go-back-link" onClick={() => window.history.back()}>
          <i className="fas fa-arrow-left"></i> Go Back
        </a>
      </div>

      <Form
        form={form}
        name="successStoryForm"
        layout="vertical"
        autoComplete="off"
        onFinish={submitHandler}
      >
        <Form.Item label="title" name="title">
          <Input />
        </Form.Item>

        <Form.Item label="description" name="description">
          <Input />
        </Form.Item>

        <Form.Item
          name="mainPicture"
          valuePropName="fileList"
          getValueFromEvent={(e) => e.fileList}
        >
          <Upload
            maxCount={1}
            accept="image/*"
            beforeUpload={beforUploadTypeFileIsImage}
            customRequest={imageFileUploadedHandler}
          >
            <Button
              icon={<UploadOutlined />}
              loading={isLoading}
              disabled={isLoading}
            >
              Upload
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            save
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default AdminAddSuccessstoryV2;
