"use server";

import { handleServerFunctions } from '@payloadcms/next/layouts';

const asyncHandleServerFunctions = async (...args) => {
  return handleServerFunctions(...args);
};

export default asyncHandleServerFunctions;
