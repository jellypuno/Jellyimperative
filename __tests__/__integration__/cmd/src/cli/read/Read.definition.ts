/*
* This program and the accompanying materials are made available under the terms of the
* Eclipse Public License v2.0 which accompanies this distribution, and is available at
* https://www.eclipse.org/legal/epl-v20.html
*
* SPDX-License-Identifier: EPL-2.0
*
* Copyright Contributors to the Zowe Project.
*
*/

import { ICommandDefinition } from "../../../../../../packages";
import { ProfileCommand } from "./profile/Profile.definition";

export const definition: ICommandDefinition = {
    name: "read",
    description: "Read some profiles",
    summary: "Read some profiles",
    type: "group",
    children: [ProfileCommand],
};

module.exports = definition;
