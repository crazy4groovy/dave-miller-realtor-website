import { Application } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

import common from "./common_controller.js";

const StimulusApp = Application.start();

StimulusApp.register("common", common);
