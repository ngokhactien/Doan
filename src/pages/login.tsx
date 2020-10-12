import { KeyOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import { useRouter } from "next/router";
import React from "react";
const Login = () => {
  const [form] = Form.useForm();
  const router = useRouter();
 
  const login = values => {
    // api.post(API_LOGIN, qs.stringify(values)).then(res => {
    //   setUser(JSON.parse(res.data.message));
    //   router.push("/");
    // });
  };
  return (
    <Row
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      style={{ padding: "20px 10px" }}
    >
      <Col
        lg={{ span: 12, offset: 6 }}
        md={{ span: 14, offset: 5 }}
        sm={{ span: 16, offset: 4 }}
        style={{ width: "100%" }}
      >
        <Divider orientation="center" style={{ fontWeight: "normal" }}>
          DEVERLOPMENT DASHBOARD
        </Divider>
        <Form form={form} onFinish={login}>
          <Form.Item
            name="email"
            normalize={value => value.trim()}
            rules={[
              {
                required: true,
                message: "Please input your email to login !"
              },
              {
                type: "email",
                message: "The input is not a valid email"
              },
              {
                min: 5,
                message: "Email must be at least 5 characters"
              }
            ]}
          >
            <Input prefix={<MailOutlined />} size="large" placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            style={{ marginBottom: "10px" }}
            rules={[
              {
                required: true,
                message: "Please input your password to login !"
              },
              {
                min: 6,
                message: "Password must be at least 6 characters"
              }
            ]}
          >
            <Input.Password
              size="large"
              prefix={<KeyOutlined />}
              placeholder="Password"
            />
          </Form.Item>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            {/* <Button style={{ float: "right" }} type="link" htmlType="button">
              <a href="">Forgot password</a>
            </Button> */}
          </div>

          <Button
            style={{ width: "100%", marginTop: "10px" }}
            type="primary"
            htmlType="submit"
            size="large"
          >
            LOGIN
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
