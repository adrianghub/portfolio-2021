import React, { useState } from "react";
import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import emailjs from "emailjs-com";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AnimatePresence, motion } from "framer-motion";

const useStyles = makeStyles(() => ({
  submitBtn: {
    width: "200px",
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const [pendingStatus, setPendingStatus] = useState(false);
  const [sendEmailSuccess, setSendEmailSuccess] = useState(false);

  const emailServiceID = "service_4396n06";
  const templateServiceID = "template_lo80y8s";
  const emailUserID = "user_24090ZjN9O6LKYaCQx1OO";

  const SendEmail = (templateParams: any) => {
    setPendingStatus(true);
    emailjs
      .send(emailServiceID, templateServiceID, templateParams, emailUserID)
      .then(
        () => {
          setSendEmailSuccess(true);
          setPendingStatus(false);
        },
        () => {
          setPendingStatus(false);
        }
      )
      .catch((error) => {
        console.error(error);
      });
  };

  const formikConfig = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required."),
      email: Yup.string()
        .email("Email address is invalid.")
        .required("Email address is required"),
      message: Yup.string().required(
        "It is required to fill out message field."
      ),
    }),
    onSubmit: (values: any) => {
      SendEmail(values);
      setSendEmailSuccess(true);
    },
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <Box overflow="hidden" style={{ position: "relative", minHeight: "300px" }}>
      <AnimatePresence>
        {sendEmailSuccess ? (
          <Box
            component={motion.div}
            // @ts-ignore

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            style={{
              position: "absolute",
              top: 0,
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box m={2}>{/* Icon */}</Box>
            <Typography
              component={motion.h4}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              variant="body2"
            >
              Your message has been sent successfully. I'll reply as soon as
              possible.
            </Typography>
          </Box>
        ) : (
          <form onSubmit={formikConfig.handleSubmit}>
            <TextField
              error={Boolean(
                formikConfig.touched.name && formikConfig.errors.name
              )}
              onBlur={formikConfig.handleBlur}
              onChange={formikConfig.handleChange}
              value={formikConfig.values.name}
              helperText={formikConfig.touched.name && formikConfig.errors.name}
              variant="filled"
              margin="normal"
              type="text"
              fullWidth
              id="name"
              label="Full name"
              name="name"
            />
            <TextField
              error={Boolean(
                formikConfig.touched.email && formikConfig.errors.email
              )}
              onBlur={formikConfig.handleBlur}
              onChange={formikConfig.handleChange}
              value={formikConfig.values.email}
              helperText={
                formikConfig.touched.email && formikConfig.errors.email
              }
              variant="filled"
              type="email"
              margin="normal"
              fullWidth
              id="email"
              label="E-mail address"
              name="email"
            />
            <TextField
              error={Boolean(
                formikConfig.touched.message && formikConfig.errors.message
              )}
              onBlur={formikConfig.handleBlur}
              onChange={formikConfig.handleChange}
              value={formikConfig.values.message}
              helperText={
                formikConfig.touched.message && formikConfig.errors.message
              }
              variant="filled"
              margin="normal"
              fullWidth
              name="message"
              label="Message"
              type="text"
              id="message"
              multiline
              minRows={5}
            />
            <Box display="flex" justifyContent="center" mt={2}>
              <Button
                className={classes.submitBtn}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={pendingStatus}
              >
                Send message
              </Button>
            </Box>
          </form>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default ContactForm;
